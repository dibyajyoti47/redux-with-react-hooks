import React, { useEffect } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { getTask } from "../store/task/taskAction";

export default function ListTask() {
    const dispatch = useDispatch();
    const taskListSelector = useSelector(state => state.task.taskList);
    useEffect(() => {
        getTaskList();
    }, []);
    const getTaskList = () => {
        dispatch(getTask())
    }
    return (
        <Container>
            <Row className='justify-content-center mt-5'>
                <Col>
                    <ul className="list-group">
                        {taskListSelector.map(
                            task =>
                            (<li className="list-group-item d-flex justify-content-between align-items-center" key={task.id}>
                                {task.title}
                                <Button size="sm" variant="outline-danger">
                                    Delete
                                </Button>
                            </li>)
                        )}
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}
