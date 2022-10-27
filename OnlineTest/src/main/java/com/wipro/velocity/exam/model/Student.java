package com.wipro.velocity.exam.model;

import lombok.AllArgsConstructor;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


import java.util.List;

@Document(collection ="Exam")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Student {
    @Id
    private String examId;
    private String name;
    private String addedBy;

    public Student(String name, String addedBy, List<Questions> questions) {
        this.name = name;
        this.addedBy = addedBy;
        this.questions = questions;
    }

    private List<Questions> questions;
	
    
  
}