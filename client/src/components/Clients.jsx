import { gql, useQuery } from "@apollo/client";
import ClientRow from "./ClientRow";
import { GET_CLIENTS } from "../queries/clientQuery";

function Clients() {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  console.log(data);

  return (
    <>
      {!loading && !error && (
        <table className="table table-auto">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.clients.map((client) => (
              <ClientRow key={client.id} client={client} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default Clients;
