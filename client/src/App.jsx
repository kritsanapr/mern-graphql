import Header from "./components/Header";
import { ApollProvider, ApollClient, InMemoryCache } from "@apollo/client";

const client = new ApollClient({
  uri: "http://localhost:3333/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApollProvider client={client}>
        <Header />
        <div className="container">
          <h1></h1>
        </div>
      </ApollProvider>
    </>
  );
}

export default App;
