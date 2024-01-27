export async function checkLogin(mail, password) {
  try {
    const params = new URLSearchParams();
    params.append('mail', mail);
    params.append('motDePasse', password);

    const url = new URL('http://localhost:8080/Farm_Game/checkLogin');
    url.search = params.toString();

    const response = await fetch(url, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    if (!response.ok) {
      const errorData = await response.json();

      if (errorData && errorData.error) {
        alert(errorData.error);
      } 

      else {
        alert('Oups... Quelque chose s\'est mal passé');
      }
      return;
    }

    const userData = await response.json();

    if (userData && userData.error) {
      alert(userData.error);
    } 
    else {
      localStorage.setItem('userData', JSON.stringify(userData));
      await getType();
      await getSaison();
      window.location.href = '/accueilBack';
    }
  } 

  catch (error) {
    console.error('Error:', error);
    alert('Oups... Quelque chose s\'est mal passé');
  }
}

export async function insertUser(nom, prenom, naissance, mail, mdp, pseudo) {
  try {
    const params = new URLSearchParams();
    params.append('nom', nom);
    params.append('prenom', prenom);
    params.append('naissance', naissance);
    params.append('mail', mail);
    params.append('mdp', mdp);
    params.append('pseudo', pseudo);

    const url = new URL('http://localhost:8080/Farm_Game/insertUser');
    url.search = params.toString();

    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    if (!response.ok) {
      const errorData = await response.json();

      if (errorData && errorData.error) {
        alert(errorData.error);
      } 

      else {
        alert('Oups... Quelque chose s\'est mal passé');
      }
      return;
    }

    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      const responseData = await response.json();
      if (responseData && responseData.error) {
          alert(responseData.error);
      } 
      else {
          if (responseData && responseData.success) {
              window.location.replace('/');
          }
      }
    } 
    else {
      window.location.replace('/');
    } 
  }
  catch (error) {
    console.error('Error:', error);
    alert('Oups... Quelque chose s\'est mal passé');
  }
}

export async function insertCulture(formData) {
  try {
    const url = 'http://localhost:8080/Farm_Game/insertCulture';
    
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();

      if (errorData && errorData.error) {
        alert(errorData.error);
      } else {
        alert('Oups... Quelque chose s\'est mal passé');
      }
      return;
    }

    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      const responseData = await response.json();
      if (responseData && responseData.error) {
        alert(responseData.error);
      } else {
        if (responseData && responseData.success) {
          window.location.replace('/accueilBack');
        }
      }
    } else {
      window.location.replace('/accueilBack');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Oups... Quelque chose s\'est mal passé');
  }
}

export async function getType() {
  try {
    const url = new URL('http://localhost:8080/Farm_Game/types');

    const response = await fetch(url, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    if (!response.ok) {
      const errorData = await response.json();

      if (errorData && errorData.error) {
        alert(errorData.error);
      } 

      else {
        alert('Oups... Quelque chose s\'est mal passé');
      }
      return;
    }

    const typeData = await response.json();

    if (typeData && typeData.error) {
      alert(typeData.error);
    } 
    else {
      localStorage.setItem('typeData', JSON.stringify(typeData));
    }
  } 

  catch (error) {
    console.error('Error:', error);
    alert('Oups... Quelque chose s\'est mal passé');
  }
}

export async function getSaison() {
  try {
    const url = new URL('http://localhost:8080/Farm_Game/saisons');

    const response = await fetch(url, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    if (!response.ok) {
      const errorData = await response.json();

      if (errorData && errorData.error) {
        alert(errorData.error);
      } 

      else {
        alert('Oups... Quelque chose s\'est mal passé');
      }
      return;
    }

    const saisonData = await response.json();

    if (saisonData && saisonData.error) {
      alert(saisonData.error);
    } 
    else {
      localStorage.setItem('saisonData', JSON.stringify(saisonData));
    }
  } 

  catch (error) {
    console.error('Error:', error);
    alert('Oups... Quelque chose s\'est mal passé');
  }
}

export async function getUserCulture(user) {
  try {
    const url = new URL('http://localhost:8080/Farm_Game/cultures?user='+user);

    const response = await fetch(url, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    if (!response.ok) {
      const errorData = await response.json();

      if (errorData && errorData.error) {
        alert(errorData.error);
      } 

      else {
        alert('Oups... Quelque chose s\'est mal passé');
      }
      return;
    }

    const cultureData = await response.json();

    if (cultureData && cultureData.error) {
      alert(cultureData.error);
    } 
    else {
      return cultureData;
    }
  } 

  catch (error) {
    console.error('Error:', error);
    alert('Oups... Quelque chose s\'est mal passé');
  }
}

export async function deconnexion() {
  localStorage.clear();
  window.location.replace('/');
}