
import React from "react";
import RemoteTable from "@evenlogics/whf-remote-table";
// import { Button } from 'primereact/button';
// import { useHistory } from "react-router-dom"
// import ActionButtons from "./ActionButtons";
// import { Dialog } from 'primereact/dialog';
// import { Formik, Field, ErrorMessage } from "formik";
// import { Col, Row, Form, Spinner, Alert, Button as ReactButton } from "react-bootstrap";
// import { initialVals } from "./JS/intialvalues"
// import { validationSchema } from "./JS/validationSchema"
// import { onSubmit } from "./JS/generic";
// import Api from '@evenlogics/whf-api'
// import { toast } from "react-toastify";


const Teachers = (props) => {
    // const [visible, setVisible] = useState(false)
    const defaultSorted = [{ dataField: "id", order: "desc" }];
    const [refresh] = React.useState(false)
    // const [submitting, setSubmitting] = useState(false);
    // const [error, setError] = useState([]);
    // const [columnData, setColumnData] = useState()
    // const [initialValues, setInitialValues] = useState(initialVals)
    // const history = useHistory();

    const columns = [
        {
            dataField: "profile_image",
            text: "Image",
            align: "center",
            headerAlign: "center",
            sort: true,
            formatter: (cell, row) => {
                console.log(row)
                return <img src={row.profile_image} alt={`Profile of ${row.name}`} width="60" />;
                
              },
        },
        {
            dataField: "id",
            text: "ID",
            align: 'center',
            headerAlign: 'center',
            sort: true,
        },
        {
            dataField: "name",
            text: "First name",
            sort: true,
            align: 'center',
            headerAlign: 'center'
        },
        {
            dataField: "username",
            text: "Username",
            sort: true,
            align: 'center',
            headerAlign: 'center'
        },
        {
            dataField: "email",
            text: "Email",
            sort: true,
            align: 'center',
            headerAlign: 'center'
        },
        {
            dataField: "phone_number",
            text: "Phone number",
            sort: true,
            align: 'center',
            headerAlign: 'center'
        },
        {
            dataField: "academic_levels",
            text: "Academic Level",
            sort: true,
            align: 'center',
            headerAlign: 'center'
        },
        {
            dataField: "subjects",
            text: "Subject",
            sort: true,
            align: 'center',
            headerAlign: 'center'
        },
        {
            dataField: "total_earning",
            text: "Total Earnings ($)",
            sort: true,
            align: 'center',
            headerAlign: 'center'
        },
        {
            dataField: "remaining_earning",
            text: "Remaining Earnings ($)",
            sort: true,
            align: 'center',
            headerAlign: 'center'
        },
        {
            dataField: "status",
            text: "Status",
            sort: true,
            align: 'center',
            headerAlign: 'center',

        },
        {
            dataField: "created_at",
            text: "Ceate Id Time",
            sort: true,
            align: 'center',
            headerAlign: 'center',
            formatter: (cell) => {
                const formattedDate = new Date(cell).toLocaleDateString('en-PK', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: 'numeric',
                });
                
                return formattedDate;}
        },
        {
            dataField: "is_blocked",
            text: "Blocked Status",
            sort: true,
            align: 'center',
            headerAlign: 'center',
            formatter: (cell) => {
                return cell === 0 ? "Blocked" : "Active";
              },
        },
        {
            dataField: "Actions",
            text: "Action",
            sort: true,
            align: "center",
            headerAlign: "center",
            // formatter: (cell, row) => {

            // }
        },
        // {
        //     dataField: "is_blocked",
        //     text: "Status",
        //     sort: true,
        //     align: 'center',
        //     headerAlign: 'center',
        //     formatter: (cell, row) => <div className="d-flex flex-wrap justify-content-center" style={{ gap: 10 }}>
        //         {/* <Button label={'authorize'} onClick={() => redirect(row,process.env.REACT_APP_LARAVEL_URL)} className={`text-capitalize p-button-raised p-button-info btn-sm`} style={{ minWidth: 100 }} /> */}
        //         {/* <Button
        //             onClick={() => statusHandler(row)}
        //             label={row?.is_blocked ? "Unblock" : "Block"}
        //             style={{ minWidth: 100 }}
        //             className={`text-capitalize p-button-raised p-button-${row.is_blocked ? "danger" : "success"} btn-sm`} /> */}
        //     </div>
        // },
        {
            dataField: "status",
            text: "Actions",
            sort: true,
            align: 'center',
            headerAlign: 'center',
            formatter: (cell, row) => <div className="d-flex flex-wrap justify-content-center" style={{ gap: 10 }}>
                {/* {cell === "pending" ?
                    <ActionButtons row={row} tableRefresh={setRefresh} />

                    : <Button label={cell} style={{ minWidth: 100 }}
                        className={`text-capitalize p-button-raised p-button-${cell === "approved" ? "success" : "danger"} btn-sm`} />
                } */}
                {/* <Button label={'detail'} onClick={() => redirect(row)} className={`text-capitalize p-button-raised p-button-info btn-sm`} style={{ minWidth: 100 }} />
                <Button label={'send earnings'} onClick={() => onHide(row)} className={`text-capitalize p-button-raised p-button-warning btn-sm`} style={{ minWidth: 100 }} />
                <Button label={'summary'} onClick={() => addSummary(row)} className={`text-capitalize p-button-raised p-button-secondary btn-sm`} style={{ minWidth: 100 }} /> */}
            </div>
        },
    ]

    // const addSummary = (data) => {
    //     props.history.push({pathname:`/teacher/${data.id}/summary`,state:{teacherId:data.id}})
    // }

    // const statusHandler = (row) => {
    //     Api.request("post", `/users/${row?.id}/block-unblock`).then(res => {
    //         toast.success(`Status ${row?.is_blocked ? `Unblocked` : `Blocked`} Successfully`);   
    //         setRefresh(prev => prev = !prev) 

    //     })
    //         .catch(err => console.log(err))
    // }

    // const redirect = (row,redirectUrl = null) => {
    //     if(redirectUrl){
    //         const url = `${redirectUrl}youtube/accesstoken`;
    //         window.open(url, '_blank');
    //     }else{
    //         history.push({
    //             pathname: `/users/teachers/${row.id}/detail`,
    //             details: row
    //         })
    //     }
    // }
    // const onHide = (row) => {
    //     console.log(columnData,"data")
    //     setColumnData(row)
    //     setInitialValues({
    //         ...initialValues,
    //         remaining_amount:row?.remaining_earning,
    //         teacher_id:row?.id
    //     })
    //     setVisible(!visible)
    // }
    return (
        <>
            {/* <Dialog header="Send Earnings" visible={visible} onHide={onHide} breakpoints={{ '960px': '75vw', '640px': '100vw' }} style={{ width: '50vw' }}>

                {error.length > 0 ? (
                    <Alert variant={"danger"}>
                        <ul>
                            {error.map((error) => (
                                <li>{error}</li>
                            ))}
                        </ul>
                    </Alert>
                ) : (
                    ""
                )}
                <Formik
                    validationSchema={validationSchema}
                    initialValues={initialValues}
                    onSubmit={(values) => onSubmit(values, setSubmitting, props, setError, visible, setVisible, refresh, setRefresh)}
                // enableReinitialize={true}
                >
                    {({ values, errors, touched, setFieldValue, handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                            <Row className="mb-3" style={{ gap: '20px 0px', girdGap: '20px 0px' }}  >
                                <Form.Group as={Col} sm="6" xl="4" controlId="send_money" >
                                    <Form.Label>Send Amount<span className="text-red">*</span></Form.Label>
                                    <Field className="form-control form-control-lg" type='number' min={1} name="send_money" value={values.send_money} />
                                    <span className="text-red" ><ErrorMessage name="send_money" /></span>
                                </Form.Group>

                                <Form.Group as={Col} sm="6" xl="4" controlId="remaining_amount" >
                                    <Form.Label>Remaining Amount<span className="text-red"></span></Form.Label>
                                    <Field disabled className="form-control form-control-lg" type='number' name="remaining_amount" value={values.remaining_amount} />
                                    <span className="text-red" ><ErrorMessage name="remaining_amount" /></span>
                                </Form.Group>
                                <Form.Group as={Col} lg="12" className="form-group">
                                    <div className="d-flex justify-content-end">
                                        <ReactButton
                                            variant="success"
                                            type="submit"
                                            disabled={submitting || values.send_money > values.remaining_amount}
                                            className="mr-2"
                                        >
                                            {submitting ? (
                                                <>
                                                    <Spinner
                                                        as="span"
                                                        animation="border"
                                                        size="sm"
                                                        role="status"
                                                        aria-hidden="true"
                                                    />
                                                    &nbsp; Submiting...
                                                </>
                                            ) : (
                                                "Save"
                                            )}
                                        </ReactButton>

                                        <ReactButton variant="danger" type="button" onClick={onHide}>
                                            Cancel
                                        </ReactButton>
                                    </div>
                                </Form.Group>
                            </Row>

                            {false && (
                                <div className={'row'}>
                                    <div className={'col-12'}>
                                        <code>
                                            <pre>Values: {JSON.stringify(values, null, 2)}</pre>
                                        </code>
                                    </div>
                                    <div className={'col-12'}>
                                        <pre>Errors: {JSON.stringify(errors, null, 2)}</pre>
                                    </div>
                                    <div className={'col-12'}>
                                        <pre>Touched: {JSON.stringify(touched, null, 2)}</pre>
                                    </div>
                                </div>
                            )}
                        </form>
                    )}
                </Formik>
            </Dialog> */}
            <h2>White Falcon Teachers </h2>
            <RemoteTable
                entity={"teachers"}
                customEntity={"teachers"}
                columns={columns}
                sort={defaultSorted}
                hideActionCol={true}
                showAdvanceFilters={true}
                Query={refresh}
            />
        </>
    )
}

export default Teachers;
