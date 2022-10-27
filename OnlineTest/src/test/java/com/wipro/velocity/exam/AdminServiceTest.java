package com.wipro.velocity.exam;

import com.wipro.velocity.exam.model.Admin;
import com.wipro.velocity.exam.model.Student;
import com.wipro.velocity.exam.model.Questions;
import com.wipro.velocity.exam.repo.IAdminRepo;
import com.wipro.velocity.exam.service.AdminService;

import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;

import java.util.Arrays;
import java.util.List;

@SpringBootTest
@TestPropertySource(properties = "spring.mongodb.embedded.version=3.5.5")
public class AdminServiceTest {

    @Autowired
    AdminService adminService;

    @Autowired
    IAdminRepo adminRepo;

    @Test
    public void testSaveExam(){
        Student e=new Student();
        e.setName("testExam");
        e.setAddedBy("test@gmail.com");

        String res=adminService.saveExam(e);
        Assert.assertEquals("saved Successfully",res);
    }
    @Test
    public void testSaveExamDuplicate(){
        Student e=new Student();
        e.setName("testExam");
        e.setAddedBy("test@gmail.com");
        String res=adminService.saveExam(e);
        Assert.assertEquals("exam already exist with the same name, add another one",res);
    }

    @Test
    public void testFetchAllExams(){
        List<Student> exams=adminService.fetchAllExams();
        Assert.assertNotEquals(exams.size(),0);
    }

    @Test
    public void testUpdateExam(){
        Student e=adminService.fetchAllExams().get(0);
        e.setAddedBy("testUpdate@gmail.com");
        Student res=adminService.updateExam(e);
        Assert.assertEquals(res.getAddedBy(),"testUpdate@gmail.com");
    }

    @Test
    public void testAddQuestion(){
        Student e=new Student();
        e.setName("testExam2");
        e.setAddedBy("test2@gmail.com");
        adminService.saveExam(e);

        List<String> options= Arrays.asList(new String[]{"a","b","c","d"});
        Admin q=new Admin();
        q.setQuestion("demo Question");
        q.setOptions(options);
        q.setExamId(adminRepo.findByName("testExam2").get().getExamId());
        q.setAnswer(0);
        String res=adminService.addQuestiontoExam(q);
        Assert.assertEquals(res,"question successfully added");
    }

    @Test
    public void testDeleteQuestion(){
        Student ex=new Student();
        ex.setName("testExam3");
        ex.setAddedBy("test3@gmail.com");
        adminService.saveExam(ex);

        Student e=adminRepo.findByName("testExam3").get();

        List<String> options= Arrays.asList(new String[]{"a","b","c","d"});
        Admin q=new Admin();
        q.setQuestion("demo Question");
        q.setOptions(options);
        q.setExamId(e.getExamId());
        q.setAnswer(0);
        adminService.addQuestiontoExam(q);

        String examId=e.getExamId();
        Questions question=new Questions();
        question.setQuestion("demo Question");
        Student res=adminService.deleteQuestion(examId,question);
        Assert.assertEquals(res.getQuestions().size(),0);
    }
}
