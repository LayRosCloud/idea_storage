package com.protobin.project.controller;

import com.protobin.project.dto.stackTechnology.StackTechnologyAllCreateDto;
import com.protobin.project.dto.stackTechnology.StackTechnologyResponseDto;
import com.protobin.project.exception.annotation.ApiResponseBadRequest;
import com.protobin.project.exception.annotation.ApiResponseForbidden;
import com.protobin.project.exception.annotation.ApiResponseNoAuth;
import com.protobin.project.exception.annotation.ApiResponseNotFound;
import com.protobin.project.service.StackTechnologyService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping(path = "v1/stack")
@Tag(name = "Стэк", description = "Необходимые руты для работы со стэком проекта")
public class StackTechnologyController {

    private final StackTechnologyService stackTechnologyService;

    @PostMapping
    @Operation(
            summary = "Создать список технологий стэка",
            description = "Создается список технологий для указанного проекта",
            security = @SecurityRequirement(name = "bearerAuth")
    )
    @ApiResponse(responseCode = "201", description = "Стэк создан" )
    @ApiResponseNotFound
    @ApiResponseBadRequest
    @ApiResponseForbidden
    @ApiResponseNoAuth
    public ResponseEntity<List<StackTechnologyResponseDto>> create(@RequestBody StackTechnologyAllCreateDto createAllDto) {
        var created = stackTechnologyService.createAll(createAllDto);

        return new ResponseEntity<>(created, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    @Operation(
            summary = "Удалить технологию стэка",
            description = "Удаляется технология стэка",
            security = @SecurityRequirement(name = "bearerAuth")
    )
    @ApiResponse(responseCode = "204", description = "Была удалена технология стека")
    @ApiResponseNoAuth
    @ApiResponseForbidden
    @ApiResponseNotFound
    public ResponseEntity<Void> deleteById(@PathVariable UUID id) {
        stackTechnologyService.deleteById(id);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
