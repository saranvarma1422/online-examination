package com.wipro.velocity.exam.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Document(collection ="student")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class StudentRegistration {
	@Id
	private String sid;
	private String student_name;
	private String student_email;
	private Long student_mobno;
	private String student_city;
	private String student_dob;
	private String student_branch;
	private String student_state;

	public StudentRegistration(String student_name, String student_email, Long student_mobno, String student_city, String student_dob, String student_branch, String student_state, Integer student_yoc, String student_password, String profile) {
		this.student_name = student_name;
		this.student_email = student_email;
		this.student_mobno = student_mobno;
		this.student_city = student_city;
		this.student_dob = student_dob;
		this.student_branch = student_branch;
		this.student_state = student_state;
		this.student_yoc = student_yoc;
		this.student_password = student_password;
		this.profile = profile;
	}

	private Integer student_yoc;
	private String student_password;
	private List<String> student_test=new ArrayList<>();
	private List<Integer> student_result=new ArrayList<>();
	private String profile="user";
	
	}
	
	
