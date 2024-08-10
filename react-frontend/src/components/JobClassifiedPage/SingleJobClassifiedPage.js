import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import client from "../../services/restClient";
import moment from "moment";
import { InputText } from 'primereact/inputtext';
import UserLayout from "../Layouts/UserLayout";


const SingleJobClassifiedPage = (props) => {
    const navigate = useNavigate();
    const urlParams = useParams();
    const [_entity, set_entity] = useState();

    const [employeeName, setEmployeeName] = useState([]);
const [employeeInterest, setEmployeeInterest] = useState([]);

    useEffect(() => {
        //on mount
        client
            .service("jobClassified")
            .get(urlParams.singleJobClassifiedId, { query: { $populate: [            {
                path: "createdBy",
                service: "users",
                select: ["name"],
              },{
                path: "updatedBy",
                service: "users",
                select: ["name"],
              },"employeeName","employeeInterest"] }})
            .then((res) => {
                set_entity(res || {});
                const employeeName = Array.isArray(res.employeeName)
            ? res.employeeName.map((elem) => ({ _id: elem._id, name: elem.name }))
            : res.employeeName
                ? [{ _id: res.employeeName._id, name: res.employeeName.name }]
                : [];
        setEmployeeName(employeeName);
const employeeInterest = Array.isArray(res.employeeInterest)
            ? res.employeeInterest.map((elem) => ({ _id: elem._id, skills: elem.skills }))
            : res.employeeInterest
                ? [{ _id: res.employeeInterest._id, skills: res.employeeInterest.skills }]
                : [];
        setEmployeeInterest(employeeInterest);
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "JobClassified", type: "error", message: error.message || "Failed get jobClassified" });
            });
    }, [props,urlParams.singleJobClassifiedId]);


    const goBack = () => {
        navigate(-1, { replace: true });
    };

    return (
        <UserLayout>
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">JobClassified</h3>
                </div>
                <p>jobClassified/{urlParams.singleJobClassifiedId}</p>
                {/* ~cb-project-dashboard~ */}
            </div>
            <div className="card w-full">
                <div className="grid ">

            <div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">SuitableJobs</label><p className="m-0 ml-3" >{_entity?.suitableJobs}</p></div>
            <div className="col-12 md:col-6 lg:col-3"><label className="text-sm">Employee Name</label>
            <p>{employeeName.map((elem) => (
                    <Link key={elem._id} to={`/employeeDetails/${elem._id}`}>
                        <div className="card">
                            <p className="text-xl text-primary">{elem.name}</p>
                        </div>
                    </Link>
                ))}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm">EmployeeInterest</label>
            <p>{employeeInterest.map((elem) => (
                    <Link key={elem._id} to={`/employeeDetails/${elem._id}`}>
                        <div className="card">
                            <p className="text-xl text-primary">{elem.skills}</p>
                        </div>
                    </Link>
                ))}</p></div>

            <div className="col-12">&nbsp;</div>
            <div className="col-12 md:col-6 lg:col-3">
                <label className="text-sm text-primary">created</label>
                <p className="m-0 ml-3">{moment(_entity?.createdAt).fromNow()}</p>
            </div>
            
            <div className="col-12 md:col-6 lg:col-3">
                <label className="text-sm text-primary">updated</label>
                <p className="m-0 ml-3">{moment(_entity?.updatedAt).fromNow()}</p>
            </div>
            
            <div className="col-12 md:col-6 lg:col-3">
                <label className="text-sm text-primary">createdBy</label>
                <p className="m-0 ml-3">{_entity?.createdBy?.name}</p>
            </div>
            
            <div className="col-12 md:col-6 lg:col-3">
                <label className="text-sm text-primary">lastUpdatedBy</label>
                <p className="m-0 ml-3">{_entity?.updatedBy?.name}</p>
            </div>

                </div>
            </div>
        </div>
        
        </UserLayout>
    );
};

const mapState = (state) => {
    return {};
};

const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
    //
});

export default connect(mapState, mapDispatch)(SingleJobClassifiedPage);
