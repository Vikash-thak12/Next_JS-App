import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github"


export const authOptons = {
    providers: [
        GithubProvider({
            clientId: "Ov23li2zJGbXsIOm0AzL",
            clientSecret: "267fef03828aa713ed3220a836de07d39a42eff2"
          }),
    ]
}

export default NextAuth(authOptons)