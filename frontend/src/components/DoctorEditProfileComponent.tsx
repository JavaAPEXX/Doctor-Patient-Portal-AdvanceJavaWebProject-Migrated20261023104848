import React, { useState } from 'react';

interface DoctorEditProfileComponentData {
    successMsg?: string;
    errorMsg?: string;
    successMsgForD?: string;
    errorMsgForD?: string;
    sp?: string;
}

type DoctorEditProfileComponentProps = {
    data?: Record<string, any>;
    onSubmit?: (formData: Record<string, any>) => void | Promise<void>;
};

export const DoctorEditProfileComponent: React.FC<DoctorEditProfileComponentProps> = ({ data = {}, onSubmit }) => {
    const [formData, setFormData] = useState<Record<string, any>>({
        'newPassword': '',
        'oldPassword': '',
        'id': '',
        'fullName': '',
        'dateOfBirth': '',
        'qualification': '',
        'email': '',
        'phone': '',
        'specialist': '',
    });
    const [backendActionNotice, setBackendActionNotice] = useState("");

const { doctorObj, errorMsg, errorMsgForD, spList, successMsg, successMsgForD } = data;

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
        setBackendActionNotice("This form originally submitted to '../doctorChangePassword' using POST. That backend action has not been migrated to an API endpoint, so the form was not submitted.");
    
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
                : "This form originally submitted to '../doctorChangePassword' using POST. That backend action has not been migrated to an API endpoint, so the form was not submitted.",
        );
    };

    return (
        <>
        {backendActionNotice && (
            <div className="alert alert-warning" role="alert" data-apex-backend-action="unmigrated">
                {backendActionNotice}
            </div>
        )}
<nav className="navbar navbar-expand-lg navbar-dark bg-success">
        	<div className="container-fluid">
        		<a className="navbar-brand" href="/doctorindex"><i className="fa-sharp fa-solid fa-hospital"></i> Doctor Patient Portal</a>
        		
        		<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        			<span className="navbar-toggler-icon"></span>
        		</button>
        		<div className="collapse navbar-collapse" id="navbarSupportedContent">
        			
        			<ul className="navbar-nav me-auto mb-2 mb-lg-0">
        				<li className="nav-item"><a className="nav-link active" aria-current="page" href="/doctorindex"><i className="fa fa-home"></i>
        						HOME</a></li>
        
        				<li className="nav-item"><a className="nav-link active" aria-current="page" href="/doctorpatient"><i className="fa fa-wheelchair"></i> PATIENT</a></li>
        			</ul>
        
        			<div className="dropdown">
        				<button className="btn btn-outline-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        					<i className="fa-solid fa-user-doctor"></i> {doctorObj?.fullName}
        				</button>
        				<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        					<li><a className="dropdown-item" href="/doctoreditprofile">Edit
        							Profile</a></li>
        					<li><a className="dropdown-item" href="../doctorLogout">Logout</a></li>
        
        				</ul>
        			</div>
        
        
        		</div>
        	</div>
        </nav>
        
        
        	
        
        	{(!doctorObj ) && (<>
        
        		
        
        	</>)}
        
        	
        
        	<div className="container p-4">
        		<div className="row">
        			<div className="col-md-4">
        				<div className="card my-card">
        
        					<div className="card-body">
        						<p className="fs-3 text-center text-success">Change Password</p>
        
        						
        						
        						{(!!(successMsg) ) && (<>
        							<p className="text-center text-success fs-5">{successMsg}</p>
        							
        						</>)}
        
        						
        						{(!!(errorMsg) ) && (<>
        							<p className="text-center text-danger fs-5">{errorMsg}</p>
        							
        						</>)}
        						
        
        						
        
        						<form onSubmit={handleSubmit} action="../doctorChangePassword" method="post">
        							<div className="mb-3">
        								<label className="form-label">Enter New Password</label> <input onChange={handleInputChange} name="newPassword" type="password" placeholder="Enter new password" className="form-control" required="required" />
        
        							</div>
        							<div className="mb-3">
        								<label className="form-label">Enter Old Password</label> <input onChange={handleInputChange} name="oldPassword" type="password" placeholder="Enter old password" className="form-control" required />
        							</div>
        							<input type="hidden" value={doctorObj?.id} name="doctorId" />
        
        							<button type="submit" className="btn btn-success col-md-12">Change
        								Password</button>
        						</form>
        						
        					</div>
        				</div>
        
        			</div>
        
        			
        
        			<div className="col-md-6 offset-md-2">
        				<div className="card my-card">
        
        					<div className="card-body">
        						<p className="fs-3 text-center text-success">Edit Doctor Profile</p>
        
        						
        						
        						{(!!(successMsgForD) ) && (<>
        							<p className="text-center text-success fs-5">{successMsgForD}</p>
        							
        						</>)}
        
        						
        						{(!!(errorMsgForD) ) && (<>
        							<p className="text-center text-danger fs-5">{errorMsgForD}</p>
        							
        						</>)}
        						
        
        
        						
        
        
        							
        							<form onSubmit={handleSubmit} action="../doctorEditProfile" method="post">
        								<div className="mb-3">
        									<label className="form-label">Full Name</label> <input onChange={handleInputChange} name="fullName" type="text" placeholder="Enter full name" className="form-control" value={doctorObj?.fullName} />
        
        								</div>
        								<div className="mb-3">
        									<label className="form-label">Date of Birth</label> <input onChange={handleInputChange} name="dateOfBirth" type="date" placeholder="Enter DOB" className="form-control" value={doctorObj?.dateOfBirth} />
        
        								</div>
        								<div className="mb-3">
        									<label className="form-label">Qualification</label> <input onChange={handleInputChange} name="qualification" type="text" placeholder="Enter qualification" className="form-control" value={doctorObj?.qualification} />
        								</div>
        
        								<div className="mb-3">
        									<label className="form-label">Specialist</label> <select onChange={handleInputChange} className="form-control" name="specialist">
        										<option>{doctorObj?.specialist}</option>
        
        										{(spList && spList?.length > 0 ? spList : []).map((sp: any, index: number) => (<>
        										<option>
        											{sp.specialistName}
        										</option>
        										</>))}
        
        									</select>
        								</div>
        
        								<div className="mb-3">
        									<label className="form-label">Email address</label> <input onChange={handleInputChange} name="email" type="email" placeholder="Enter Email" className="form-control" readonly value={doctorObj?.email} />
        
        								</div>
        								<div className="mb-3">
        									<label className="form-label">Phone</label> <input onChange={handleInputChange} name="phone" type="text" placeholder="Enter mobile number" className="form-control" value={doctorObj?.phone} />
        
        								</div>
        								
        								<input type="hidden" value={doctorObj?.id} name="doctorId" />
        
        
        								<button type="submit" className="btn btn-success text-white col-md-12">Update</button>
        							</form>
        						
        					</div>
        				</div>
        
        			</div>
        
        			
        
        		</div>
        	</div>
        </>
    );
};

export default DoctorEditProfileComponent;
