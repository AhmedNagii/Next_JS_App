const Profile = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  return <div className="h1-bold">Profile {id}</div>;
};

export default Profile;
