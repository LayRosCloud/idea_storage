package com.protobin.project.controller;

import com.protobin.project.dto.ProjectCreateDto;
import com.protobin.project.dto.ProjectResponseDto;
import com.protobin.project.dto.ProjectUpdateDto;
import com.protobin.project.service.ProjectService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping(path = "v1/projects")
public class ProjectController {

    private final ProjectService projectService;

    @GetMapping("/{id}")
    public ResponseEntity<ProjectResponseDto> findById(@PathVariable UUID id) {
        var found = projectService.findById(id);

        return new ResponseEntity<>(found, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<ProjectResponseDto> create(@RequestBody ProjectCreateDto createDto) {
        var created = projectService.create(createDto);

        return new ResponseEntity<>(created, HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<ProjectResponseDto> update(@RequestBody ProjectUpdateDto updateDto) {
        var updated = projectService.update(updateDto);

        return new ResponseEntity<>(updated, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable UUID id) {
        projectService.deleteById(id);

        return new ResponseEntity<>(HttpStatus.OK);
    }
}
