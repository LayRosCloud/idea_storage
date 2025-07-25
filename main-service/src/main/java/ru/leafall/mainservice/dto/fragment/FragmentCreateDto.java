package ru.leafall.mainservice.dto.fragment;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;
import org.springframework.web.multipart.MultipartFile;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FragmentCreateDto {
    @NotNull
    private MultipartFile picture;

    @NotNull
    @Min(0)
    private Long projectId;

    @NotBlank
    @Length(min = 1, max = 2000)
    private String description;
}
