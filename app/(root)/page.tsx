import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";


const Home = async () => {
    const session = await auth();
    console.log("session", session);
    return (
      <>
        <div className='h1-bold' >Welcome Home of the app</div>
            <form
                className="px-10 pt-38"
                action={async () => { 
                    "use server";
                    await signOut({redirectTo:ROUTES.SIGN_IN});
                }}
            >
                <Button type="submit">Sign Out</Button>
            </form>
      </>
    )
}
export default Home
