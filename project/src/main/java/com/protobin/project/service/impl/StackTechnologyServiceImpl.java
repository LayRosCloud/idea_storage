package com.protobin.project.service.impl;

import com.protobin.project.dto.stackTechnology.StackTechnologyAllCreateDto;
import com.protobin.project.dto.stackTechnology.StackTechnologyResponseDto;
import com.protobin.project.entity.StackTechnologyEntity;
import com.protobin.project.exception.NotFoundException;
import com.protobin.project.mapper.StackTechnologyMapper;
import com.protobin.project.repository.ProjectRepository;
import com.protobin.project.repository.StackTechnologyRepository;
import com.protobin.project.service.StackTechnologyService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import static com.protobin.project.utils.ListUtils.*;

@Service
@RequiredArgsConstructor
public class StackTechnologyServiceImpl implements StackTechnologyService {

    private final StackTechnologyRepository stackTechnologyRepository;
    private final ProjectRepository projectRepository;

    private final StackTechnologyMapper stackTechnologyMapper;

    @Override
    public List<StackTechnologyResponseDto> createAll(StackTechnologyAllCreateDto createDto) {
        var foundProject = projectRepository.findById(createDto.getProjectId())
                .orElseThrow(() -> new NotFoundException("Project is not found"));

        var stackTechnologyNames = removeDuplicatesIgnoreCase(createDto.getNames());

        List<StackTechnologyEntity> toSave = new ArrayList<>();
        for (var stackTechnologyName: stackTechnologyNames) {
            var stackTechnology = new StackTechnologyEntity();
            stackTechnology.setName(stackTechnologyName);
            stackTechnology.setProject(foundProject);
            toSave.add(stackTechnology);
        }

        List<StackTechnologyEntity> saved = stackTechnologyRepository.saveAll(toSave);
        return saved.stream().map(stackTechnologyMapper::mapToDto).toList();
    }

    @Override
    public void deleteById(UUID id) {
        var found = stackTechnologyRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Tag is not found"));

        stackTechnologyRepository.deleteById(found.getId());
    }
}
