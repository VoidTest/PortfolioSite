from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    # Projects data - you can replace with your actual projects
    github_projects = [
        {
            'name': 'Project 1',
            'description': 'A brief description of your project',
            'link': 'https://github.com/yourusername/project1',
            'tech': ['Python', 'Flask', 'JavaScript']
        },
        {
            'name': 'Project 2',
            'description': 'Another cool project you worked on',
            'link': 'https://github.com/yourusername/project2',
            'tech': ['React', 'Node.js', 'MongoDB']
        }
    ]
    
    minecraft_projects = [
        {
            'name': 'Space Texture Pack',
            'description': 'A space-themed texture pack for Minecraft',
            'image': 'static/images/texture-pack1.jpg'
        },
        {
            'name': 'Galactic Build',
            'description': 'A massive space station build in Minecraft',
            'image': 'static/images/build1.jpg'
        }
    ]
    
    other_skills = [
        'Web Development', 'UI/UX Design', 'Game Modding', '3D Modeling'
    ]
    
    # Add personal info section
    personal_info = {
        'name': 'Your Name',
        'title': 'Developer & Creative Designer',
        'bio': 'I am a passionate developer with a creative eye for design. I love building innovative solutions and creating immersive digital experiences.',
        'location': 'City, Country',
        'avatar': 'static/images/profile-pic.jpg',
        'resume_link': 'static/files/resume.pdf'
    }
    
    # Add education and experience
    education = [
        {
            'degree': 'Bachelor of Science in Computer Science',
            'school': 'University Name',
            'years': '20XX - 20XX',
            'description': 'Focused on software development and game design'
        }
    ]
    
    experience = [
        {
            'position': 'Software Developer',
            'company': 'Company Name',
            'years': '20XX - Present',
            'description': 'Developing web applications and maintaining code infrastructure'
        }
    ]
    
    # Add testimonials
    testimonials = [
        {
            'text': 'Exceptional work! The project was completed on time and exceeded expectations.',
            'author': 'Client Name',
            'position': 'CEO, Company Name'
        },
        {
            'text': 'A talented developer with an eye for design. Highly recommended!',
            'author': 'Colleague Name',
            'position': 'Senior Developer'
        }
    ]
    
    # Add achievements and certifications
    achievements = [
        'Hackathon Winner 20XX',
        'Published Game Mod with 10,000+ Downloads',
        'Featured in Community Showcase'
    ]
    
    return render_template('index.html', 
                          github_projects=github_projects, 
                          minecraft_projects=minecraft_projects,
                          other_skills=other_skills,
                          personal_info=personal_info,
                          education=education,
                          experience=experience,
                          testimonials=testimonials,
                          achievements=achievements)

if __name__ == '__main__':
    app.run(debug=True)
