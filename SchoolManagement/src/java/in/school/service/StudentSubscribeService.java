package in.school.service;

import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.andromeda.commons.model.Response;
import in.school.dao.StudentSubscribeDAO;
import in.school.model.StudentRegistration;
     
@Service
public class StudentSubscribeService  
{
	@Autowired
	private StudentSubscribeDAO studentSubscribeDAO;

	Response response = new Response();

	public Response getTeachers()
	{
		response.setSuccessful(false);
		List<Map<String, Object>> list = studentSubscribeDAO.getTeachers();
		response.setSuccessful(true);
		response.setResponseObject(list);
		return response;
	}
   
	public Response getCourse(Integer teacherid)
	{
		response.setSuccessful(false);
		List<StudentRegistration> colleges = studentSubscribeDAO.getCourse(teacherid);
		response.setSuccessful(true);
		response.setResponseObject(colleges);
		return response;
	}
	
	public Response getStudentData(StudentRegistration teacher)
	{  
		response.setSuccessful(false);
		List<Map<String, Object>> list = studentSubscribeDAO.getStudentData(teacher);
		response.setResponseObject(list);
		response.setSuccessful(true);
		return response;
	}
}    