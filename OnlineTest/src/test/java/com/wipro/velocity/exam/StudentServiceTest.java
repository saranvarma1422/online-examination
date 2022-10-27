package com.wipro.velocity.exam;

import com.wipro.velocity.exam.model.StudentRegistration;
import com.wipro.velocity.exam.model.Result;
import com.wipro.velocity.exam.repo.IStudentRepo;
import com.wipro.velocity.exam.service.StudentService;

import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;

@SpringBootTest
@TestPropertySource(properties = "spring.mongodb.embedded.version=3.5.5")
public class StudentServiceTest {

    @Autowired
    private IStudentRepo iExamrepo;

    @Autowired
    StudentService examService;

    @Test
    public void testSaveStudent(){
        StudentRegistration er=new StudentRegistration();
        er.setStudent_name("demo1");
        er.setStudent_email("demo1@gmail.com");
        String res=examService.saveStudent(er);
        Assert.assertEquals("saved Successfully",res);
    }

    @Test
    public void testSaveStudentDuplicate(){
        StudentRegistration er=new StudentRegistration();
        er.setStudent_name("demo1");
        er.setStudent_email("demo1@gmail.com");
        String res=examService.saveStudent(er);
        Assert.assertEquals("student already exist, login",res);
    }

    @Test
    public void testGetStudents(){
        Assert.assertNotEquals(examService.getStudents(),0);
    }

    @Test
    public void testDeleteStudent(){
        StudentRegistration er=new StudentRegistration();
        er.setStudent_name("demo2");
        er.setStudent_email("demo2@gmail.com");
        examService.saveStudent(er);

        StudentRegistration res=iExamrepo.findByStudent_email("demo2@gmail.com").get();
        Assert.assertEquals(examService.deleteStudent(res),true);
    }

    @Test
    public void testGetStudentByEmail(){
        StudentRegistration er=new StudentRegistration();
        er.setStudent_name("demo8");
        er.setStudent_email("demo8@gmail.com");
        examService.saveStudent(er);
        Assert.assertNotEquals(iExamrepo.findByStudent_email("demo8@gmail.com").get(),null);
    }

    @Test
    public void testLogin(){
        StudentRegistration er=new StudentRegistration();
        er.setStudent_name("demo3");
        er.setStudent_email("demo3@gmail.com");
        er.setStudent_password("hello");

        examService.saveStudent(er);
        Assert.assertNotEquals(examService.logincheck(er),null);
    }

    @Test
    public void testResultAdd(){
        StudentRegistration er=iExamrepo.findByStudent_email("demo3@gmail.com").get();
        Result result=new Result();
        result.setStudent_result(10);
        result.setStudent_test("java");
        result.setEmail("demo3@gmail.com");
        result.setNumberOfQuestions(10);
        Assert.assertEquals("result saved Successfully",examService.resultadd(result));
    }
}
