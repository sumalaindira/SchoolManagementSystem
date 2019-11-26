package in.school.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.andromeda.commons.model.Response;
import in.school.model.StudentRegistration;
import in.school.service.StudentSubscribeService;

@RestController
@RequestMapping("/student")
public class StudentSubscribeController
{       
	@Autowired
	private StudentSubscribeService studentSubscribeService;

	@ResponseBody
	@RequestMapping(value = "getTeachers", method = { RequestMethod.POST, RequestMethod.GET })
	public Response getDsitricts()
	{
		return studentSubscribeService.getTeachers();
	}
	
	@ResponseBody
	@RequestMapping(value = { "/getCourse" }, method = { RequestMethod.POST })
	public Response getCourse(@RequestBody Integer teacherid)
	{
		return studentSubscribeService.getCourse(teacherid);
	}  
	
	@ResponseBody
	@RequestMapping(value = "/getStudentData", method = { RequestMethod.POST, RequestMethod.GET })
	public Response getStudentData(@RequestBody StudentRegistration teacher)
	{
		return studentSubscribeService.getStudentData(teacher);
	}  
 
	
}   