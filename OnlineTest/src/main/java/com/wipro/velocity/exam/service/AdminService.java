package com.wipro.velocity.exam.service;

import com.wipro.velocity.exam.model.Admin;
import com.wipro.velocity.exam.model.Student;
import com.wipro.velocity.exam.model.Questions;
import com.wipro.velocity.exam.repo.IAdminRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class AdminService {

    @Autowired
    IAdminRepo adminRepo;

    public String saveExam(Student exam){
        Optional<Student> checkDuplicate=adminRepo.findByName(exam.getName());
        if(checkDuplicate.isPresent())
            return "exam already exist with the same name, add another one";
        else{
            try{
                adminRepo.save(exam);
            }catch(Exception e){
                return "error generated while saving exam";
            }
            return "saved Successfully";
        }
    }

    public List<Student> fetchAllExams(){
        return adminRepo.findAll();
    }
    public boolean deleteExam(Student exam) {
        boolean status=false;
        try {
            adminRepo.delete(exam);
            status=true;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return status;
    }

    public Student updateExam(Student exam) {
        Student updated=null;
        try {
            updated=adminRepo.save(exam);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return updated;
    }

    public String addQuestiontoExam(Admin examPojo){
        Student exam=null;
        try{
            exam=adminRepo.findByExamId(examPojo.getExamId()).get();
            List<Questions> q=exam.getQuestions();
            if(q==null)
                q=new ArrayList<>();
            q.add(new Questions(examPojo.getExamId(),
                    examPojo.getQuestion(),examPojo.getOptions(),
                    examPojo.getAnswer()));
            exam.setQuestions(q);
        }catch(Exception e){
            return "error occoured while fetching exam by id";
        }
        try{
            adminRepo.save(exam);
        }catch(Exception e){
            return "error occoured while asaving question";
        }
        return "question successfully added";
    }

    public Student deleteQuestion(String examId, Questions question){
        Student exam=adminRepo.findById(examId).get();
        List<Questions> questionList=exam.getQuestions();
        for(int i=0;i< questionList.size();i++){
            if(question.getQuestion().equalsIgnoreCase(questionList.get(i).getQuestion())){
                questionList.remove(i);
                break;
            }
        }
        exam.setQuestions(questionList);
        return updateExam(exam);
    }

}
