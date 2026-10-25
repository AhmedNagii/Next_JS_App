import { auth } from "@/auth";



const Home = async () => {
    const session = await auth();
    console.log("session", session);
    return (
      <>
        <div className='h1-bold' >Welcome Home of the app</div>
         
      </>
    )
}
export default Home
