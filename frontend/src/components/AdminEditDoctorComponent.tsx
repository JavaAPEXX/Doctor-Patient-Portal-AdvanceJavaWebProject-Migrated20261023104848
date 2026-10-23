import React, { useState } from 'react';

interface AdminEditDoctorComponentData {
    successMsg?: string;
    errorMsg?: string;
    sp?: string;
}

type AdminEditDoctorComponentProps = {
    data?: Record<string, any>;
    onSubmit?: (formData: Record<string, any>) => void | Promise<void>;
};

export const AdminEditDoctorComponent: React.FC<AdminEditDoctorComponentProps> = ({ data = {}, onSubmit }) => {
    const [formData, setFormData] = useState<Record<string, any>>({
        'fullName': '',
        'dateOfBirth': '',
        'qualification': '',
        'email': '',
        'phone': '',
        'password': '',
        'id': '',
        'specialist': '',
    });
    const [backendActionNotice, setBackendActionNotice] = useState("");

const { doctor, errorMsg, spList, successMsg } = data;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        if (name) setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (onSubmit) {
            await onSubmit(formData);
            return;
        }
        setBackendActionNotice("This form originally submitted to '../updateDoctor' using POST. That backend action has not been migrated to an API endpoint, so the form was not submitted.");
    
    };

    const handleBackendAction = async (
        e: React.MouseEvent<HTMLElement>,
        action: string = "",
    ) => {
        e.preventDefault();
        if (onSubmit) {
            await onSubmit(formData);
            return;
        }
        setBackendActionNotice(
            action
                ? `The original backend action '${action}' has not been migrated to an API endpoint, so the action was not sent.`
                : "This form originally submitted to '../updateDoctor' using POST. That backend action has not been migrated to an API endpoint, so the form was not submitted.",
        );
    };

    return (
        <>
        <div className="alert alert-warning" role="alert" data-apex-data-source="unmigrated">{"This page originally loaded data through getDoctorById (doctor). That server-side data source has not been migrated to an API endpoint, so the page is showing the source design without that data."}</div>
        <>
        {backendActionNotice && (
            <div className="alert alert-warning" role="alert" data-apex-backend-action="unmigrated">
                {backendActionNotice}
            </div>
        )}
<nav className="navbar navbar-expand-lg navbar-dark bg-danger">
        	<div className="container-fluid">
        		<a className="navbar-brand" href="/adminindex"><i className="fa-sharp fa-solid fa-hospital"></i> Doctor Patient Portal</a>
        		
        		<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        			<span className="navbar-toggler-icon"></span>
        		</button>
        		<div className="collapse navbar-collapse" id="navbarSupportedContent">
        			
        			<ul className="navbar-nav me-auto mb-2 mb-lg-0">
        				<li className="nav-item"><a className="nav-link active" aria-current="page" href="/adminindex"><i className="fa fa-home"></i>
        						HOME</a></li>
        				<li className="nav-item"><a className="nav-link active" aria-current="page" href="doctor?.jsp"><i className="fa-solid fa-user-doctor"></i> DOCTOR</a></li>
        				<li className="nav-item"><a className="nav-link active" aria-current="page" href="/adminviewdoctor"><i className="fa-solid fa-list"></i> VIEW DOCTOR</a></li>
        				<li className="nav-item"><a className="nav-link active" aria-current="page" href="/adminpatient"><i className="fa fa-wheelchair"></i> PATIENT</a></li>
        			</ul>
        
        			<div className="dropdown">
        				<button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        					<i className="fa fa-universal-access"></i> Admin
        				</button>
        				<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        					<li><a className="dropdown-item" href="../adminLogout">Logout</a></li>
        
        				</ul>
        			</div>
        
        
        		</div>
        	</div>
        </nav>
        
        
        
        	<div className="container-fluid p-3">
        		<div className="row">
        			<div className="col-md-4 offset-4">
        				<div className="card my-card">
        					<div className="card-body">
        						<p className="fs-3 text-center text-danger">Edit Doctor Details</p>
        
        						
        						
        						{(!!(successMsg) ) && (<>
        							<p className="text-center text-success fs-3">{successMsg}</p>
        							
        						</>)}
        
        						
        						{(!!(errorMsg) ) && (<>
        							<p className="text-center text-danger fs-3">{errorMsg}</p>
        							
        						</>)}
        						
        
        
        
        						
        
        						
        						
        						
        						
        						<form onSubmit={handleSubmit} action="../updateDoctor" method="post">
        							<div className="mb-3">
        								<label className="form-label">Full Name</label> <input onChange={handleInputChange} name="fullName" type="text" placeholder="Enter full name" className="form-control" value={doctor?.fullName} />
        
        							</div>
        							<div className="mb-3">
        								<label className="form-label">Date of Birth</label> <input onChange={handleInputChange} name="dateOfBirth" type="date" placeholder="Enter DOB" className="form-control" value={doctor?.dateOfBirth} />
        
        							</div>
        							<div className="mb-3">
        								<label className="form-label">Qualification</label> <input onChange={handleInputChange} name="qualification" type="text" placeholder="Enter qualification" className="form-control" value={doctor?.qualification} />
        							</div>
        
        							<div className="mb-3">
        								<label className="form-label">Specialist</label> <select onChange={handleInputChange} className="form-control" name="specialist">
        									<option>{doctor?.specialist}</option>
        
        									{(spList && spList?.length > 0 ? spList : []).map((sp: any, index: number) => (<>
        									<option>
        										{sp.specialistName}
        									</option>
        									</>))}
        
        								</select>
        							</div>
        
        							<div className="mb-3">
        								<label className="form-label">Email address</label> <input onChange={handleInputChange} name="email" type="email" placeholder="Enter Email" className="form-control" value={doctor?.email} />
        
        							</div>
        							<div className="mb-3">
        								<label className="form-label">Phone</label> <input onChange={handleInputChange} name="phone" type="text" placeholder="Enter mobile number" className="form-control" value={doctor?.phone} />
        
        							</div>
        							<div className="mb-3">
        								<label className="form-label">Password</label> <input onChange={handleInputChange} name="password" type="text" placeholder="Enter password" className="form-control" value={doctor?.password} />
        							</div>
        							
        							
        							<div className="mb-3">
        								<input name="id" type="hidden" className="form-control" value={doctor?.id} />
        							</div>
        
        							<button type="submit" className="btn btn-danger text-white col-md-12">Update</button>
        						</form>
        						
        						
        
        					</div>
        
        				</div>
        			</div>
        
        		</div>
        	</div>
        </>
        </>
    );
};

export default AdminEditDoctorComponent;
