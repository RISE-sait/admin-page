import ClientsPage from "src/components/clients/ClientPage";
import clientsData from "src/data/clients.json"
import { SearchParams } from "src/types/searchParams";

export default async function ManageClientsPage(props: {searchParams: Promise<SearchParams>}) {

  // use this file for fetching clients from API in future
  
  const searchParams = await props.searchParams;

  const search = searchParams.name || ""

  const filteredClients = clientsData.filter((client) => client.name.toLowerCase().includes(search.toLowerCase()))

  return <ClientsPage clients={filteredClients} />
}