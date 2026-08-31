import { Input } from "@/components/ui/input";

const Users = () => {
  return (
    <div className="h-full flex flex-col items-center border-l">
      <div className="w-full h-16 md:p-8 flex items-center justify-center text-2xl mt-1 md:justify-end md:ml-5">
        <Input className="w-52" />
      </div>
      <div className="w-full flex-1 p-6">
        {/* Details */}
        <div className="flex flex-col">
          <h1 className="text-5xl md:w-6xl font-semibold">User Directory</h1>
          <p className="text-gray-500">
            Manage accounts, permissions, and network access.
          </p>
        </div>
        {/* Cards  */}
        <div className="flex flex-col md:flex-row gap-3 mt-3 mb-3 justify-between">
          <div className="flex flex-col border md:w-64 md:h-28 p-4 gap-2 rounded-2xl">
            <h1 className="text-sm text-gray-400">TOTAL USERS</h1>
            <div className="flex">
              <h1 className="text-3xl font-semibold text-blue-300">2,491</h1>
              <span className="text-teal-500">+12%</span>
            </div>
          </div>
          <div className="flex flex-col border md:w-64 md:h-28 p-4 gap-2 rounded-2xl">
            <h1 className="text-sm text-gray-400">ACTIVE SESSIONS</h1>
            <div className="flex">
              <h1 className="text-3xl font-semibold text-orange-300">842</h1>
            </div>
          </div>
          <div className="flex flex-col border md:w-64 md:h-28 p-4 gap-2 rounded-2xl">
            <h1 className="text-sm text-gray-400">PENDING APPROVALS</h1>
            <div className="flex">
              <h1 className="text-3xl font-semibold text-orange-400">14</h1>
            </div>
          </div>
        </div>

        {/* USERS INFO  */}
      </div>
    </div>
  );
};

export default Users;
