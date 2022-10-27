package com.wipro.velocity.exam.controller;

import com.wipro.velocity.exam.model.Admin;
import com.wipro.velocity.exam.model.Student;
import com.wipro.velocity.exam.model.Questions;
import com.wipro.velocity.exam.service.AdminService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/admin")
public class AdminController {
    @Autowired
    private AdminService adminSer;

    
    //  http://localhost:4041/api/admin/save-exam
    @PostMapping("save-exam")
    public ResponseEntity<String> saveExam(@RequestBody Student exam){
        return new ResponseEntity<String>(adminSer.saveExam(exam), HttpStatus.OK);
    }

    
    //     http://localhost:4041/api/admin/all-exams
    @GetMapping("all-exams")
    public ResponseEntity<List<Student>> fetchAllExams(){
        return new ResponseEntity<List<Student>>(adminSer.fetchAllExams(), HttpStatus.OK);
    }

    //    http://localhost:4041/api/admin/delete-exam
    @PostMapping("delete-exam")
    public ResponseEntity<Boolean> deleteExam(@RequestBody Student exam){
        return new ResponseEntity<Boolean>(adminSer.deleteExam(exam), HttpStatus.OK);
    }
    
    
    //  http://localhost:4041/api/admin/update-Exam
    @PostMapping("update-Exam")
    public ResponseEntity<Student> updateExam(@RequestBody Student exam){
        return new ResponseEntity<Student>(adminSer.updateExam(exam), HttpStatus.OK);
    }

    
    //  http://localhost:4041/api/admin/add-question
    @PostMapping("add-question")
    public ResponseEntity<String> addQuestion(@RequestBody Admin examPojo){
        return new ResponseEntity<String>(adminSer.addQuestiontoExam(examPojo), HttpStatus.OK);
    }
    
    
    //   http://localhost:4041/api/admin/delete-question
    @PostMapping("delete-question")
    public ResponseEntity<Student> deleteQuestion(@RequestBody Questions question, @RequestParam String examId){
        return       new ResponseEntity<Student>(adminSer.deleteQuestion(examId,question), HttpStatus.OK);
    }
}
