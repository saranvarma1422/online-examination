package com.wipro.velocity.exam.repo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.wipro.velocity.exam.model.Student;

import java.util.Optional;

@Repository
public interface IAdminRepo extends MongoRepository<Student,String> {

    Optional<Student> findByName(String name);
    Optional<Student> findByExamId(String examId);
}
