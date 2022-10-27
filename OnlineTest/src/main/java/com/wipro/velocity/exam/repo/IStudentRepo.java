package com.wipro.velocity.exam.repo;


import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.wipro.velocity.exam.model.StudentRegistration;

import java.util.Optional;

@Repository
public interface IStudentRepo  extends MongoRepository<StudentRegistration, Integer> {

    @Query("{student_email: ?0}")
    Optional<StudentRegistration> findByStudent_email(String student_email);

    @Query("{student_email:?0,student_password:?1}")
    Optional<StudentRegistration> findByStudent_emailAndStudent_password(String student_email,String student_password);
}
