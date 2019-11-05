import React from "react";
import {Link} from "react-router-dom";
import {
    Header,
    Image,
    Table,
  } from 'semantic-ui-react'
  
const BoardList = ({datas})=> {

    console.log("sechdule/BoardTable")
    return (
        <>
             <Table celled>
                    <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>no</Table.HeaderCell>
                        <Table.HeaderCell>title</Table.HeaderCell>
                        <Table.HeaderCell>작성자</Table.HeaderCell>
                        <Table.HeaderCell>Date</Table.HeaderCell>
                        <Table.HeaderCell>likes</Table.HeaderCell>
                    </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {/* 데이터 반복으로 돌릴부분 */}
                        {datas.map((data,index)=>{
                            return (
                                <Table.Row key={index}>
                                <Table.Cell>{parseInt(data.no)+1}</Table.Cell>
                   
                                    <Table.Cell>
                                    <Link to={"/board/schedule/"+data.no}>
                                    <Header as='h4' image>
                                            <Header.Content>
                                               {data.title}
                                            </Header.Content>
                                    </Header>
                                     </Link>
                                    </Table.Cell>
                                <Table.Cell>
                                <Image rounded size='mini' src='/images/wireframe/square-image.png' />
                                    {data.userNickName}
                                </Table.Cell>
                                <Table.Cell>{data.date}</Table.Cell>
                                <Table.Cell>{data.likes}</Table.Cell>
                            </Table.Row>
                            )
                        })}
                      
                        {/* 데이터 반복으로 돌릴부분 */}
                    </Table.Body>
                </Table>
              
        </>
    )

}



export default BoardList;