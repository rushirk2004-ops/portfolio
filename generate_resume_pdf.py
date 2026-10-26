import os
from reportlab.lib.pagesizes import letter
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors

def generate_resume(output_path):
    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        leftMargin=36,
        rightMargin=36,
        topMargin=36,
        bottomMargin=36
    )

    styles = getSampleStyleSheet()

    # Custom styles
    name_style = ParagraphStyle(
        'ResumeName',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=20,
        leading=24,
        alignment=1, # Center
        textColor=colors.HexColor('#111827')
    )

    contact_style = ParagraphStyle(
        'ResumeContact',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=13,
        alignment=1, # Center
        textColor=colors.HexColor('#374151')
    )

    section_heading_style = ParagraphStyle(
        'ResumeSection',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=15,
        textColor=colors.HexColor('#111827'),
        spaceBefore=8,
        spaceAfter=2
    )

    body_style = ParagraphStyle(
        'ResumeBody',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=12.5,
        textColor=colors.HexColor('#1f2937')
    )

    body_bold = ParagraphStyle(
        'ResumeBodyBold',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9,
        leading=12.5,
        textColor=colors.HexColor('#111827')
    )

    right_text = ParagraphStyle(
        'ResumeRight',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=12.5,
        alignment=2, # Right
        textColor=colors.HexColor('#374151')
    )

    right_text_bold = ParagraphStyle(
        'ResumeRightBold',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9,
        leading=12.5,
        alignment=2, # Right
        textColor=colors.HexColor('#111827')
    )

    bullet_style = ParagraphStyle(
        'ResumeBullet',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.75,
        leading=12,
        leftIndent=12,
        firstLineIndent=-8,
        textColor=colors.HexColor('#1f2937')
    )

    story = []

    # Header
    story.append(Paragraph("Rushikesh Kunde", name_style))
    story.append(Spacer(1, 2))
    story.append(Paragraph("Pune, India", contact_style))
    story.append(Paragraph(
        "rushikeshkunde764@gmail.com &nbsp;|&nbsp; +91 8767688450 &nbsp;|&nbsp; "
        "<a href='https://www.linkedin.com/in/rushikesh-kunde-63678a301/'><u>linkedin.com/in/rushikesh-kunde</u></a> &nbsp;|&nbsp; "
        "<a href='https://github.com/rushirk2004-ops'><u>github.com/rushirk2004-ops</u></a>",
        contact_style
    ))
    story.append(Spacer(1, 4))

    def add_section_header(title):
        story.append(Paragraph(title, section_heading_style))
        story.append(HRFlowable(width="100%", thickness=0.75, color=colors.HexColor('#374151'), spaceAfter=4, spaceBefore=1))

    # Professional Summary
    add_section_header("Professional Summary")
    story.append(Paragraph(
        "Computer Science undergraduate skilled in Python, SQL, statistics, data analysis, and problem-solving with hands-on "
        "experience in predictive modeling, backend development, workflow automation, and REST API integration.",
        body_style
    ))
    story.append(Spacer(1, 4))

    # Education
    add_section_header("Education")
    
    # Degree
    edu_table1 = Table([
        [
            Paragraph("<b>International Institute of Information Technology, Pune</b>", body_style),
            Paragraph("Aug 2023 – May 2027", right_text)
        ],
        [
            Paragraph("Bachelor of Engineering in Computer Science Engineering", body_style),
            Paragraph("<b>CGPA: 9.16</b>", right_text)
        ]
    ], colWidths=[380, 160])
    edu_table1.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(edu_table1)
    story.append(Spacer(1, 3))

    # 12th
    edu_table2 = Table([
        [
            Paragraph("<b>Higher Secondary Education (12th)</b>", body_style),
            Paragraph("2022", right_text)
        ],
        [
            Paragraph("Nutan Vidya Prasarak Mandal’s Arts, Commerce & Science College, Lasalgaon", body_style),
            Paragraph("<b>88.50%</b>", right_text)
        ]
    ], colWidths=[380, 160])
    edu_table2.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(edu_table2)
    story.append(Spacer(1, 3))

    # 10th
    edu_table3 = Table([
        [
            Paragraph("<b>Secondary Education (10th)</b>", body_style),
            Paragraph("2020", right_text)
        ],
        [
            Paragraph("Savitribai Phule Madhyamik Vidyalay, Somthandesh", body_style),
            Paragraph("<b>85.60%</b>", right_text)
        ]
    ], colWidths=[380, 160])
    edu_table3.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(edu_table3)
    story.append(Spacer(1, 4))

    # Skills
    add_section_header("Skills")
    skills_data = [
        ("Programming Languages:", "Java, SQL, Python, C, C++"),
        ("Data Analytics & Machine Learning:", "Data Analysis, Statistics, Predictive Modeling, Data Processing, Pandas, NumPy (Numerical Python), scikit-learn"),
        ("Web & Backend Development:", "Thymeleaf, HTML, CSS, Spring Boot, REST APIs, JPA, Flask"),
        ("Databases & Cloud:", "MySQL, PostgreSQL, MongoDB, AWS (EC2), Cloud Computing"),
        ("Core Computer Science:", "Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks, Software Engineering"),
        ("Automation & Testing:", "Web Scraping, BeautifulSoup, API Testing, Unit Testing"),
        ("Libraries:", "NumPy, Pandas, Matplotlib, Scikit-learn"),
        ("Tools:", "Postman, Git, GitHub, Docker, Visual Studio Code, Jupyter Notebook, Render, Eclipse, IntelliJ IDEA")
    ]
    for label, val in skills_data:
        story.append(Paragraph(f"<b>{label}</b> {val}", body_style))
        story.append(Spacer(1, 1.5))

    story.append(Spacer(1, 3))

    # Experience
    add_section_header("Experience")
    exp_table = Table([
        [
            Paragraph("<b>Web Developer Intern</b> | Appwizer Solution (OPC) Private Limited", body_style),
            Paragraph("Jan 2026 – June 2026", right_text)
        ]
    ], colWidths=[380, 160])
    exp_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(exp_table)

    exp_bullets = [
        "Developed web scraping pipelines using Python and BeautifulSoup, extracting and processing 10K+ records into structured datasets.",
        "Automated data extraction workflows, reducing manual effort by 60% and improving operational efficiency.",
        "Contributed to frontend and backend integration for web workflows supporting 1K+ user interactions.",
        "Managed website hosting and deployment using WordPress and Hostinger.",
        "Collaborated with development team members during workflow implementation, testing, and issue resolution.",
        "<b>Project Links:</b> <a href='https://github.com/rushirk2004-ops/webscrapping_publication'><u>GitHub</u></a> | Live Demo"
    ]
    for b in exp_bullets:
        story.append(Paragraph(f"• {b}", bullet_style))
        story.append(Spacer(1, 1))

    story.append(Spacer(1, 4))

    # Projects
    add_section_header("Projects")

    # Project 1: Attendance Tracker System
    proj1_table = Table([
        [
            Paragraph("<b>Attendance Tracker System</b>", body_style),
            Paragraph("<a href='https://github.com/rushirk2004-ops/attendance'><u>GitHub</u></a>", right_text)
        ]
    ], colWidths=[380, 160])
    proj1_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(proj1_table)
    p1_bullets = [
        "Developed an attendance management system to maintain and track student records.",
        "Built REST APIs and integrated MySQL database for efficient data storage and retrieval.",
        "Implemented structured database workflows and validation processes for efficient attendance management.",
        "Performed debugging and API testing to ensure reliable system functionality.",
        "<b>Technologies:</b> Java, Spring Boot, MySQL, JPA, REST APIs"
    ]
    for b in p1_bullets:
        story.append(Paragraph(f"• {b}", bullet_style))
        story.append(Spacer(1, 1))

    story.append(Spacer(1, 4))

    # Project 2: Movie Recommendation System
    proj2_table = Table([
        [
            Paragraph("<b>Movie Recommendation System</b>", body_style),
            Paragraph("<a href='https://github.com/rushirk2004-ops/movie_recommendation_system'><u>GitHub</u></a>", right_text)
        ]
    ], colWidths=[380, 160])
    proj2_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(proj2_table)
    p2_bullets = [
        "Developed a content-based movie recommendation system using movie metadata including genres, keywords, cast, director, and overview.",
        "Preprocessed and analyzed movie metadata using Pandas and NumPy, including handling missing values and extracting relevant features from JSON-formatted attributes.",
        "Combined movie attributes into a unified feature representation and applied CountVectorizer with 5,000 features and English stop-word removal for text-based similarity analysis.",
        "Built a recommendation pipeline using scikit-learn to identify movies with similar characteristics based on their extracted feature representations.",
        "<b>Technologies:</b> Python, Pandas, NumPy, scikit-learn"
    ]
    for b in p2_bullets:
        story.append(Paragraph(f"• {b}", bullet_style))
        story.append(Spacer(1, 1))

    story.append(Spacer(1, 4))

    # Project 3: Online Shopping Cart
    proj3_table = Table([
        [
            Paragraph("<b>Online Shopping Cart</b>", body_style),
            Paragraph("<a href='https://github.com/rushirk2004-ops/shoppingweb'><u>GitHub</u></a>", right_text)
        ]
    ], colWidths=[380, 160])
    proj3_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(proj3_table)
    p3_bullets = [
        "Developed a full-stack e-commerce application using Java, Spring Boot, Thymeleaf, MySQL, and JPA, implementing product, cart, user, and order management.",
        "Implemented Spring Security for authentication, role-based access, password encryption, account locking, and secure user management.",
        "Added product search, category filtering, pagination, order-status tracking, and Docker-based containerization for application deployment.",
        "<b>Technologies:</b> Java, OOP, Spring Boot, Spring Security, JPA, MySQL, Thymeleaf, Docker"
    ]
    for b in p3_bullets:
        story.append(Paragraph(f"• {b}", bullet_style))
        story.append(Spacer(1, 1))

    doc.build(story)
    print("Resume PDF generated successfully at:", output_path)

if __name__ == '__main__':
    output = os.path.join(os.path.dirname(__file__), 'public', 'resume.pdf')
    generate_resume(output)
