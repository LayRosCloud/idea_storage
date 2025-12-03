package com.protobin.project.repository;

import com.protobin.project.entity.StackTechnologyEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface StackTechnologyRepository extends JpaRepository<StackTechnologyEntity, UUID> {
}
