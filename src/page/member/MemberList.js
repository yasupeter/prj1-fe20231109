import { useEffect, useState } from "react";
import {
    Box,
    Spinner,
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
} from "@chakra-ui/react";
import axios from "axios";

export function MemberList() {
    const [list, setList] = useState(null);

    useEffect(() => {
        axios.get("/api/member/list").then((response) => setList(response.data));
    }, []);

    if (list === null) {
        return <Spinner />;
    }

    return (
        <Box>
            <Table>
                <Thead>
                    <Tr>
                        <Th>id</Th>
                        <Th>pw</Th>
                        <Th>email</Th>
                        <Th>가입일시</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {list.map((member) => (
                        <Tr key={member.id}>
                            <Td>{member.id}</Td>
                            <Td>{member.password}</Td>
                            <Td>{member.email}</Td>
                            <Td>{member.inserted}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </Box>
    );
}
