package com.ve3.taskmanagerbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ve3.taskmanagerbackend.dto.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {

}

