import * as Styled from "@/styles/login";
import Head from "next/head";

export default function Login() {
  return (
    <>
      <Head>
        <title>Modern Design | Login </title>
      </Head>
      <Styled.Container>
        <h1>Sign In</h1>
        <Styled.Form>
          <Styled.Label>
            <label htmlFor="">E-mail</label>
            <input type="text" placeholder="ruandev@gmail.com" />
          </Styled.Label>
          <Styled.Label>
            <label htmlFor="">Password</label>
            <input type="password" placeholder="****" />
          </Styled.Label>
          <button>Sign In</button>
          <span>
            Forgot you password ? <a>Click here</a>
          </span>
        </Styled.Form>
        <h2>Create your account</h2>
        <button>Create Account</button>
      </Styled.Container>
    </>
  );
}
