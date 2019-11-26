package in.school.model;


import java.util.Date;

import com.andromeda.commons.model.BaseModel;

public class StudentRegistration extends BaseModel
{
	private static final long serialVersionUID = 1L;

	
	private Integer teacherid;
	private String teachername;
	private String name;
    private String phone;
	private String email;
	private Date dob;
	private String logUser;
	private Integer districtId;
	private String coursename;
	private Integer courseid;   
	   
   
	

	public Integer getTeacherid() {
		return teacherid;
	}

	public void setTeacherid(Integer teacherid) {
		this.teacherid = teacherid;
	}

	public String getCoursename() {
		return coursename;
	}

	public void setCoursename(String coursename) {
		this.coursename = coursename;
	}

	public Integer getCourseid() {
		return courseid;
	}

	public void setCourseid(Integer courseid) {
		this.courseid = courseid;
	}

	public String getTeachername() {
		return teachername;
	}

	public void setTeachername(String teachername) {
		this.teachername = teachername;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Date getDob() {
		return dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}

	public String getLogUser() {
		return logUser;
	}

	public void setLogUser(String logUser) {
		this.logUser = logUser;
	}

	public Integer getDistrictId()
	{
		return districtId;
	}

	public void setDistrictId(Integer districtId)
	{
		this.districtId = districtId;
	}

	public static long getSerialversionuid()
	{
		return serialVersionUID;
	}

}
