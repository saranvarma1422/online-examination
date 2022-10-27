package com.wipro.velocity.exam.controller;

import com.wipro.velocity.exam.model.StudentRegistration;
import com.wipro.velocity.exam.model.Result;
import com.wipro.velocity.exam.repo.IStudentRepo;
import com.wipro.velocity.exam.service.StudentService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;



@RestController
@CrossOrigin(origins="http://localhost:4200")
public class StudentController {
	
	@Autowired
	private StudentService studentservice;

	@Autowired
	private IStudentRepo iExamrepo;
	
	
	//    http://localhost:4041/api/save-student
	@PostMapping("save-student")
	public ResponseEntity<String> saveStudent(@RequestBody StudentRegistration student) {
		return new ResponseEntity<String>(studentservice.saveStudent(student), HttpStatus.OK);
	}
	
	  
	//   http://localhost:4041/api/login
	@PostMapping("login")
	public ResponseEntity<StudentRegistration> loginStudent(@RequestBody StudentRegistration student) {
		return new ResponseEntity<StudentRegistration>(studentservice.logincheck(student),HttpStatus.OK);
	}
	
	
	//  http://localhost:4041/api/result
	@PostMapping("result")
	public String Result(@RequestBody Result result) {
		return studentservice.resultadd(result);
	}
	
	
	//   http://localhost:4041/api/getall
	@GetMapping("getall")
	public List<StudentRegistration> getAll() {
		return studentservice.getStudents();
	}

	
	//  http://localhost:4041/api/get-results
	@PostMapping("get-results")
	public ResponseEntity<StudentRegistration> getUserresult(@RequestBody StudentRegistration examregistration){
		return new ResponseEntity<StudentRegistration>(iExamrepo.findByStudent_email(examregistration.getStudent_email()).get(),HttpStatus.OK);
	}

}
