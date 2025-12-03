package com.protobin.project.service;

import com.protobin.project.dto.stackTechnology.StackTechnologyAllCreateDto;
import com.protobin.project.dto.stackTechnology.StackTechnologyResponseDto;

import java.util.List;
import java.util.UUID;

public interface StackTechnologyService {

    List<StackTechnologyResponseDto> createAll(StackTechnologyAllCreateDto createDto);

    void deleteById(UUID id);
}
