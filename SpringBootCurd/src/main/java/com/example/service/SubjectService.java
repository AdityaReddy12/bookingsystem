package com.example.service;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.bean.Subject;
import com.example.repository.SubjectRepository;

@Service
public class SubjectService {
	@Autowired
	public SubjectRepository subjectRepo;
    
	public List<Subject> getAllSubjects()
	{
		List<Subject> subjects = new ArrayList<>();
		subjectRepo.findAll().forEach(subjects::add);
		return subjects;
	}
	public Optional<Subject> getSubById(int id)
	{
		return subjectRepo.findById(id);
		
	}
	public void addSubject(Subject subject) {
		subjectRepo.save(subject);
		
	}

	public void updateSubject(int id, Subject subject) {
		subjectRepo.save(subject);
		
	}

	public void deleteSubject(int id) {
		subjectRepo.deleteById(id);
		
	}

	
}
