package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.bean.User;
import com.example.repository.UserRepository;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins="*")
public class UserController {
		
	@Autowired
	private UserRepository  repo;
	@PostMapping("/login")
	public ResponseEntity<?> loginUser(@RequestBody User userData){
		
		System.out.println(userData);
		User user=repo.findByUserId(userData.getUserId());
		
		if(user.getPassword().equals(userData.getPassword()))
			return ResponseEntity.ok(user);
		return (ResponseEntity<?>) ResponseEntity.internalServerError();
		
	}
	@PostMapping("/signup")
   public void signUpUser(@RequestBody User userData){
		
		System.out.println(userData);
		User user=repo.save(userData);
		
			
		
		// ResponseEntity.ok(user);
		//return (ResponseEntity<?>) ResponseEntity.internalServerError();
		
	}

}
