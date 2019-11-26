package in.school.dao;

import com.andromeda.commons.dao.BaseDAO;
import in.school.model.StudentRegistration;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;

@Repository
public class StudentSubscribeDAO
  extends BaseDAO  
{
  public List<Map<String, Object>> getTeachers()
  {
    List<Map<String, Object>> list = this.sqlSessionTemplate.selectList("StudentRegistration.getTeachers");
    return list;
  }
  
  public List<StudentRegistration> getCourse(Integer teacherid)
  {
    List<StudentRegistration> colleges = this.sqlSessionTemplate.selectList("StudentRegistration.getCourse", teacherid);
    return colleges;
  }   
  

	public List<Map<String, Object>> getStudentData(StudentRegistration teacher)
	{  
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("p", teacher);
		List<Map<String, Object>> depts = sqlSessionTemplate.selectList("StudentRegistration.getStudentData", params);
		return depts;
	}
           
}
        