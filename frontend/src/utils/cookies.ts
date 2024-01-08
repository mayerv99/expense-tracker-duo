class Cookies {
  setCookies(name: any, value: any) {
    document.cookie = `${name}=${value};path=/`;
  }

  getAccessToken() {
    const cookies = document.cookie.split("; ");

    for (const cookie of cookies) {
      const [name, value] = cookie.split("=");

      // Suponha que o cookie que contém o token de autorização tenha o nome "Authorization"
      if (name === "Authorization") {
        // Decodifique o valor do cookie, se necessário
        const decodedToken = decodeURIComponent(value);
        return decodedToken;
      }
    }

    return null;
  }
}

export default Cookies;
