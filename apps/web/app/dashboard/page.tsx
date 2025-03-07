import { SignedIn } from "@clerk/nextjs";

import getUsers from "../get-users";
export default async function DashboardPage() {
  const users = await getUsers();
  console.log(users);

  return (
    <>
      {/* Only show dashboard content when signed in */}
      <SignedIn>
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
          <h1 className="text-4xl font-bold mb-8">Welcome to your Dashboard</h1>
          <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl w-full">
            <div className="flex items-center gap-4 mb-6">
              <div>
                <h2 className="text-2xl font-semibold">
                  Welcome to your account
                </h2>
                <p className="text-gray-600">
                  Manage your licenses and profile
                </p>
              </div>
            </div>

            <div className="space-y-6 mt-6">
              <div className="border-t pt-6">
                <h3 className="text-xl font-medium mb-4">Your Licenses</h3>
                <p className="text-gray-600">
                  No licenses found. Start exploring available licenses.
                </p>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-xl font-medium mb-4">Recent Activity</h3>
                <p className="text-gray-600">No recent activity.</p>
              </div>
            </div>
            <pre>{JSON.stringify(users, null, 2)}</pre>
          </div>
        </main>
      </SignedIn>
    </>
  );
}
