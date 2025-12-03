package com.protobin.project.mapper;

import com.protobin.project.dto.stackTechnology.StackTechnologyResponseDto;
import com.protobin.project.entity.StackTechnologyEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface StackTechnologyMapper {

    StackTechnologyResponseDto mapToDto(StackTechnologyEntity entity);
}
