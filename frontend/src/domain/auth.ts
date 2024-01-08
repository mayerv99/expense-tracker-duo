import HttpRequest from "./httpRequest";
import Interceptor from "./interceptor";
import Cookies from "../utils/cookies";

interface ResponseAuth {
  auth: Boolean;
  token: string;
}

class Auth {
  public authorizationCookie: string;
  public cookies: Cookies;
  private interceptor: Interceptor;
  public httpRequest: HttpRequest; // Agora, a propriedade é pública

  public baseUrl: string;

  constructor(baseUrl: string) {

    this.baseUrl = baseUrl

    this.authorizationCookie = "nome-do-seu-cookie"; // Substitua pelo nome real do seu cookie de autorização
    this.cookies = new Cookies();
    this.interceptor = new Interceptor();
    this.httpRequest = new HttpRequest(this.interceptor);

    this.initializeAuth();
  }

  private initializeAuth() {
    const accessToken = this.cookies.getAccessToken();
    this.interceptor.setAccessToken(accessToken);
  }

  public async signIn(username: string, password: string) {
    // Exemplo: Chamada para autenticação com método POST
    const signInData = {
      username,
      password,
    };

    const response = await this.httpRequest.sendRequest(
      this.baseUrl,
      "POST",
      signInData,
    );
    const { token } = response as unknown as ResponseAuth;
    this.interceptor.setAccessToken(token);
    this.cookies.setCookies("Authorization", token)

    return response
  }

  public async signUp(email: string, password: string){
    // Exemplo: Chamada para registro com método POST
    const signUpData = {
      email, 
      password,
    };

    const response = await this.httpRequest.sendRequest(
      this.baseUrl,
      "POST",
      signUpData,
    );
    const { token } = response as unknown as ResponseAuth;
    this.interceptor.setAccessToken(token);
    this.cookies.setCookies("Authorization", token)

    return response
  }

  public async me(email: string, password: string){
    // Exemplo: Chamada para registro com método POST
    const signUpData = {
      email, 
      password,
    };

    const response = await this.httpRequest.sendRequest(
      this.baseUrl,
      "GET",
      signUpData,
    );
    const { token } = response as unknown as ResponseAuth;
    this.interceptor.setAccessToken(token);
    this.cookies.setCookies("Authorization", token)

    return response
  }

}

export default Auth;
