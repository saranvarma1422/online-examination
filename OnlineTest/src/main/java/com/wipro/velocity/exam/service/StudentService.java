package com.wipro.velocity.exam.service;

import com.wipro.velocity.exam.model.StudentRegistration;
import com.wipro.velocity.exam.model.Result;
import com.wipro.velocity.exam.repo.IStudentRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService {


	@Autowired
	private IStudentRepo iExamrepo;


	public String saveStudent(StudentRegistration student) {
		Optional<StudentRegistration> checkDuplicate=iExamrepo.findByStudent_email(student.getStudent_email());
		if(checkDuplicate.isPresent())
			return "student already exist, login";
		else{
			try{
				iExamrepo.save(student);
			}catch(Exception e){
				return "error generated while saving student";
			}
            return "saved Successfully";
		}
	}

	public List<StudentRegistration> getStudents() {
		List<StudentRegistration> list=iExamrepo.findAll();
		return list;
	}

	public boolean deleteStudent(StudentRegistration student) {
		boolean status=false;
		try {
			iExamrepo.delete(student);
			status=true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return status;
	}

	public StudentRegistration getStudentByEmail(StudentRegistration student) {
		return iExamrepo.findByStudent_email(student.getStudent_email()).get();
	}

	public StudentRegistration updateStudent(StudentRegistration student) {
		StudentRegistration updated=null;
		try {
			updated=iExamrepo.save(student);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return updated;
	}
	
	public StudentRegistration logincheck(StudentRegistration student) {
		Optional<StudentRegistration> temp=null;
		try {
			temp=iExamrepo.findByStudent_emailAndStudent_password(student.getStudent_email(),student.getStudent_password());
		} catch (Exception e) {
			e.printStackTrace();
		}
		if(temp.isPresent())
			return temp.get();
		else
			return null;
	}

	public String resultadd(Result result) {
		int sc=result.getStudent_result()*100/result.getNumberOfQuestions();
		StudentRegistration fetchedStudent=null;
		try {
			fetchedStudent=iExamrepo.findByStudent_email(result.getEmail()).get();
			fetchedStudent.getStudent_result().add(sc);
			fetchedStudent.getStudent_test().add(result.getStudent_test());
		}
		catch (Exception e) {
			return "couldn't add result, error fetching student";
		}
		try{
			iExamrepo.save(fetchedStudent);
		}catch(Exception e){
			return "error while saving result";
		}
		return "result saved Successfully";
	}
	
}

