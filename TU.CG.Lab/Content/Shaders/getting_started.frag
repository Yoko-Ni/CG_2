#version 330 core

out vec4 FragColor;
in vec2 texCoord;

uniform sampler2D boxTexture;
uniform sampler2D faceTexture;

void main()
{
	FragColor = mix(texture(faceTexture, texCoord), texture(boxTexture, texCoord), 0.2);
}