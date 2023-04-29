import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";
import Clients from "./components/Clients";
import Projects from "./components/Projects";
import AddClientModal from "./components/AddClientModal";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing = [], incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing = [], incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: "http://localhost:3333/graphql",
  cache,
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <Header />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
              {/* <Route path="/projects" element={<Projects />} /> */}
            </Routes>
            {/* <AddClientModal />
            <Projects />
            <Clients /> */}
          </div>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
