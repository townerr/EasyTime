import { DataTable } from 'react-native-paper';

const PreviousPunches = () => {
  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Date</DataTable.Title>
        <DataTable.Title>Time</DataTable.Title>
        <DataTable.Title>Work Hours</DataTable.Title>
      </DataTable.Header>
      <DataTable.Row>
        <DataTable.Cell>08/07/2022</DataTable.Cell>
        <DataTable.Cell>9:00</DataTable.Cell>
        <DataTable.Cell>0</DataTable.Cell>
      </DataTable.Row>
    </DataTable>
  )
}

export default PreviousPunches