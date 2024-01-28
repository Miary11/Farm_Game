package webservice.demo.Controllers;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import webservice.demo.Models.tools.Connect;
import webservice.demo.Models.information.Utilisateur;
import webservice.demo.Models.information.Culture;
import webservice.demo.Models.information.Saison;
import webservice.demo.Models.information.TypeCulture;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.Date;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE, RequestMethod.OPTIONS})
public class AppController {

    @GetMapping(value = "/accueilBack", produces = MediaType.APPLICATION_JSON_VALUE)
    public String accueilBack() {
        return "{\"message\": \"Welcome to the Back Office!\"}";
    }

    @GetMapping(value = "/login", produces = MediaType.APPLICATION_JSON_VALUE)
    public String login(@RequestParam String mail, @RequestParam String motDePasse)
    {
        try{
			Connect con = new Connect();
			Connection c = con.makeConnection();
			Utilisateur u = new Utilisateur();
			int checkMail = u.checkMail(c,mail);
			if (checkMail > 0) {
				int checkLog = u.checkLogin(c,mail,motDePasse);
				if (checkLog > 0) {
					Utilisateur nU = u.findSpecifiedUtilisateur(c,mail,motDePasse);
					JSONObject utilisateurJson = new JSONObject();
				    utilisateurJson.put("id", nU.getId());
				    utilisateurJson.put("nom", nU.getNom());
				    utilisateurJson.put("prenom", nU.getPrenom());
				    utilisateurJson.put("dateNaissance", nU.getNaissance());
				    utilisateurJson.put("mail", nU.getMail());
				    utilisateurJson.put("motDePasse", nU.getMotDePasse());
				    utilisateurJson.put("pseudo", nU.getPseudo());
				    JSONArray jsonArray = new JSONArray();
				    jsonArray.put(utilisateurJson);
				    c.close();
				    return jsonArray.toString();
				}
				else{
					c.close();
					return "{ \"error\": \"Mot de Passe incorrect, veuillez réessayer\" }";
				}
			}
			else {
				c.close();
				return "{ \"error\": \"Vous n'avez pas de compte. Inscrivez-vous\" }";
			}
		}

		catch (Exception e) {
			e.printStackTrace();
			return "{ \"error\": \"Oups... Quelque chose s'est mal passé\" }";
		}
    }

    @PostMapping(value = "/insertUser", produces = MediaType.APPLICATION_JSON_VALUE)
    public String insertUser(@RequestParam String nom, @RequestParam String prenom,@RequestParam String naissance,@RequestParam String mail, @RequestParam String mdp, @RequestParam String pseudo)
    {
        try{
			Utilisateur u = new Utilisateur();
            Date nD = u.getSqlDate(naissance);
            Connect con = new Connect();
			Connection c = con.makeConnection();
			int checkMail = u.checkMail(c,mail);
			if (checkMail > 0) {
				c.close();
				return "{ \"error\": \"Ce mail est déja associé à un autre compte\" }";	
			}
            else {
				Utilisateur nU = new Utilisateur(nom,prenom,nD,mail,mdp,pseudo);
				u.insertUtilisateur(c,nU);
				c.close();
				return "{ \"success\": \"Insertion réussie\" }";	
			}
		}

		catch (Exception e) {
			e.printStackTrace();
			return "{ \"error\": \"Oups... Quelque chose s'est mal passé\" }";
		}
    }

    private String extractFileName(MultipartFile file) {
        String originalFileName = file.getOriginalFilename();
    
        if (originalFileName != null) {
            String[] parts = originalFileName.split("\\.");
            if (parts.length > 1) {
                // Extract the file extension
                String extension = parts[parts.length - 1];
                return UUID.randomUUID().toString() + "." + extension;
            }
        }
    
        return UUID.randomUUID().toString();
    }
    
    private String uploadFile(MultipartFile file, String uploadPath) throws IOException {
        String fileName = extractFileName(file);
        String sanitizedFileName = fileName.replaceAll("\\s+", "_");
        String fileExtension = sanitizedFileName.substring(sanitizedFileName.lastIndexOf("."));
        String uniqueFileName = UUID.randomUUID().toString() + fileExtension;
    
        File uploadDirectory = new File(uploadPath);
        if (!uploadDirectory.exists()) {
            if (!uploadDirectory.mkdirs()) {
                throw new IOException("Failed to create upload directory");
            }
        }
    
        String filePath = uploadDirectory.getAbsolutePath() + File.separatorChar + uniqueFileName;
    
        try (InputStream input = file.getInputStream();
             OutputStream output = new FileOutputStream(filePath)) {
    
            byte[] buffer = new byte[1024];
            int length;
    
            while ((length = input.read(buffer)) > 0) {
                output.write(buffer, 0, length);
            }
        } catch (IOException e) {
            throw new IOException("Failed to write the uploaded file", e);
        }
    
        return "user_uploads/" + uniqueFileName;
    }

    @PostMapping(value = "/insertCulture", produces = MediaType.APPLICATION_JSON_VALUE)
    public String insertCulture(@RequestParam String user, @RequestParam String nom, @RequestParam String type, @RequestParam String prixAchat,@RequestParam String prixVente, @RequestParam String saison, @RequestParam("photo") MultipartFile file,HttpServletRequest request) {
        String uploadPath = request.getServletContext().getRealPath("") + File.separator + "user_uploads";
        File uploadDir = new File(uploadPath);
        if (!uploadDir.exists()) {
            uploadDir.mkdirs();
        }

        try {
            Connect con = new Connect();
            Connection c = con.makeConnection();
            String pr = user;
            String n = nom;
            String t = type;
            double pA = Double.parseDouble(prixAchat);
            double pV = Double.parseDouble(prixVente);
            String s = saison;

            String filePath = uploadFile(file, uploadPath);

            Culture cul = new Culture();
            Culture nCul = new Culture(n, t, pA, pV, s, filePath);

            cul.insertCulture(c, nCul);

            String idCul = cul.getIdLastRecord(c);

            Culture nCul2 = new Culture(idCul, pr);

            cul.insertCultureUtilisateur(c, nCul2);

            c.close();
            return "{ \"success\": \"Insertion réussie\" }";
        } 

        catch (Exception e) {
            e.printStackTrace();
            return "{ \"error\": \"" + e.getMessage() + "\" }";
        }
    }

    @GetMapping(value = "/types", produces = MediaType.APPLICATION_JSON_VALUE)
    public String getTypes()
    {
        try{
			Connect con = new Connect();
			Connection c = con.makeConnection();
			TypeCulture t = new TypeCulture();
			TypeCulture[] allType = t.findType(c);
			JSONArray jsonArray = new JSONArray();
		    for (TypeCulture type : allType) {
		        JSONObject typeJson = new JSONObject();
		        typeJson.put("idType", type.getId());
		        typeJson.put("nom", type.getNom());
		        jsonArray.put(typeJson);
		    }
		    c.close();
		    return jsonArray.toString();
		}

		catch (Exception e) {
			e.printStackTrace();
			return "{ \"error\": \"Oups... Quelque chose s'est mal passé\" }";
		}
    }

    @GetMapping(value = "/saisons", produces = MediaType.APPLICATION_JSON_VALUE)
    public String getSaisons()
    {
        try{
			Connect con = new Connect();
			Connection c = con.makeConnection();
			Saison s = new Saison();
			Saison[] allSaison = s.findSaison(c);
			JSONArray jsonArray = new JSONArray();
		    for (Saison saison : allSaison) {
		        JSONObject saisonJson = new JSONObject();
		        saisonJson.put("idSaison", saison.getId());
		        saisonJson.put("nom", saison.getNom());
		        saisonJson.put("debut", saison.getDebut());
		        saisonJson.put("fin", saison.getFin());
		        jsonArray.put(saisonJson);
		    }
		    c.close();
		    return jsonArray.toString();
		}

		catch (Exception e) {
			e.printStackTrace();
			return "{ \"error\": \"Oups... Quelque chose s'est mal passé\" }";
		}
    }

    @GetMapping(value = "/usercultures", produces = MediaType.APPLICATION_JSON_VALUE)
    public String getUserCultures(@RequestParam String user)
    {
        try{
			Connect con = new Connect();
			Connection c = con.makeConnection();
			String nId = user;
			Culture t = new Culture();
			Culture[] allCulture = t.findSpecifiedUserCulture(c,nId);
			JSONArray jsonArray = new JSONArray();
		    for (Culture culture : allCulture) {
		        JSONObject cultureJson = new JSONObject();
		        cultureJson.put("proprietaire", culture.getProprietaire());
		        cultureJson.put("idCulture", culture.getId());
		        cultureJson.put("nom", culture.getNom());
		        cultureJson.put("type", culture.getType());
		        cultureJson.put("prixAchat", culture.getPrixAchat());
		        cultureJson.put("prixVente", culture.getPrixVente());
		        cultureJson.put("saison", culture.getSaison());
		        cultureJson.put("photo", culture.getPhoto());
		        jsonArray.put(cultureJson);
		    }
		    c.close();
		    return jsonArray.toString();
		}

		catch (Exception e) {
			e.printStackTrace();
			return "{ \"error\": \"Oups... Quelque chose s'est mal passé\" }";
		}
    }
}
