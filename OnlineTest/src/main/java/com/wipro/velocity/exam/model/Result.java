package com.wipro.velocity.exam.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Result {
    private String id;
    private String student_test;
    private Integer student_result;
    private Integer numberOfQuestions;
    private String email;

}