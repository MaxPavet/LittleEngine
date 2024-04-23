#version 330 core
layout (triangles) in;
layout (line_strip, max_vertices = 2) out;

in VS_OUT {
    vec3 normal;
} gs_in[];

const float MAGNITUDE = 0.5;

uniform mat4 projection;

void main()
{
    gl_Position = (gl_in[0].gl_Position + gl_in[1].gl_Position + gl_in[2].gl_Position) / 3;
    EmitVertex();
    gl_Position =  gl_Position + vec4(gs_in[0].normal, 0.0) * MAGNITUDE;

    EmitVertex();
    EndPrimitive();
}