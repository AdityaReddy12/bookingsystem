package com.example.repository;
import org.springframework.data.repository.CrudRepository;

import com.example.bean.Subject;
public interface SubjectRepository extends CrudRepository<Subject,Integer> {

}
